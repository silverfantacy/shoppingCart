$(function () {
  $('[data-toggle="popover"]').popover()

  // 編輯modal事件
  $('[data-toggle="tooltip"]').tooltip()

  $('#removeModal').on('show.bs.modal', function (event) {
    var btn = $(event.relatedTarget); //找到btn
    // console.log(btn);
    var title = btn.data('title'); //取出data屬性
    // console.log('title', title);
    var modal = $(this);
    modal.find('.modal-title').text('確認刪除' + title); //寫入.modal-title裡
  })
})