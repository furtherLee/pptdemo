<?php

class Joke extends fActiveRecord{
  protected function configure(){
    fORMValidation::addStringReplacement($this, 'Content: Please enter a value', '不能发送空笑话噢');
  }
}
