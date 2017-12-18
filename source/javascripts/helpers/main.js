$(function () {
  $('.popover').popover()


  // 編輯modal事件
  $('[data-toggle="tooltip"]').tooltip()

  $('#addModal').on('show.bs.modal', function (event) {
    var btn = $(event.relatedTarget); //找到btn
    // console.log(btn);
    var title = btn.data('title'); //取出data屬性
    // console.log('title', title);
    var name = btn.data('name');
    console.log('name', name);
    var email = btn.data('email');
    var item = btn.data('item');
    var number = btn.data('number');
    var modal = $(this);
    modal.find('.modal-title').text(title); //寫入.modal-title裡
    modal.find('#InputName').val(name);
    modal.find('#InputEmail').val(email);
    modal.find('#inputState').val(item);
    modal.find('#Inputnumber').val(number);
  })
  $('#removeModal').on('show.bs.modal', function (event) {
    var btn = $(event.relatedTarget);
    // console.log(btn);
    var title = btn.data('title');
    // console.log('title', title);
    var modal = $(this);
    modal.find('.modal-title').text('確認刪除' + title);
  })
})