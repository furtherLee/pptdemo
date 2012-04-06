var widgets = {
post:'\
<div class="modal fade">\
  <form id="tell-jokes" class="form-horizontal well" action="#">\
    <header class="modal-header">\
      <h4> 我要讲个笑话 </h4>\
    </header>\
    <div class="modal-body clear">\
      <label for="title" class="label"> 标题要长 </label>\
      <input type="text" class="span6" name="title" placeholder="鹅鹅鹅"/>\
      <label for="content" class="label"> 笑话 </label>\
      <textarea name="content" class="span6" placeholder="从前有座山"/>\
    </div>\
    <footer class="modal-footer">\
      <button id="cancel" class="btn btn-inverse pull-right"> 不讲了 </button>\
      <button id="submit" class="btn btn-success pull-right"> 讲一个 </button>\
    </footer>\
  </form>\
</div>\
'
};
