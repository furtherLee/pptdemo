<?php

class JokeController extends Controller{

  public function index(){

    $jokes = fRecordSet::build(
			       'Joke',
			       array(),
			       array('update_time' => 'desc')
			       );

    $populars = fRecordSet::build(
				 'Joke',
				 array(),
				 array('up' => 'desc'),
				 POPULAR_LIMIT
				 );

    $this->render("Joke/index", array(
				      'title' => SITE_TITLE,
				      'jokes' => $jokes,
				      'populars' => $populars
				      ));
    
  }
  
  public function show($id){

    $populars = fRecordSet::build(
				 'Joke',
				 array(),
				 array('up' => 'desc'),
				 POPULAR_LIMIT
				 );

    $joke = new Joke($id);

    $this->render("Joke/show", array(
				     'title' => SITE_TITLE.':',
				     'joke' => $joke,
				     'populars' => $populars
				     ));
  }

  public function create(){
    $joke = new Joke();
    $joke->setTitle(fRequest::get('title'));
    $joke->setContent(fRequest::get('content'));
    $joke->store();
    echo $this->ajaxReturn(array(
				 'result' => "OK"
				 ));
    
  }

  public function up($id){
    
    $joke = new Joke($id);
    $joke->setUp($joke->getUp()+1);
    $joke->store();
    echo $this->ajaxReturn(array(
				 'result' => "OK",
				 'up' => $joke->getUp()
				 ));
    
  }

  public function down($id){
    $joke = new Joke($id);
    $joke->setDown($joke->getDown()+1);
    $joke->store();
    echo $this->ajaxReturn(array(
				 'result' => "OK",
				 'down' => $joke->getDown()
				 ));
  
  }

}