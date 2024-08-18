$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });

  $("#mask").on("click", function () {
    $("header").removeClass("open");
  });

  $("#navi a").on("open", function () {
    $("header").removeClass("open");
  });

  $(window).scroll(function () {
    $(".steps").each(function () {
      const scroll = $(window).scrollTop();
      const target = $(this).offset().top;
      const windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("stepsline_animation");
      }
    });
  });
});

function PageTopAnime() {
  const scroll = $(window).scrollTop();
  if (scroll >= 100) {
    //上から100pxスクロールしたら
    $("#page-top").removeClass("DownMove"); //#page-topについているDownMoveというクラス名を除く
    $("#page-top").addClass("UpMove"); //#page-topについているUpMoveというクラス名を付与
  } else {
    if ($("#page-top").hasClass("UpMove")) {
      //すでに#page-topにUpMoveというクラス名がついていたら
      $("#page-top").removeClass("UpMove"); //UpMoveというクラス名を除き
      $("#page-top").addClass("DownMove"); //DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
const pageTop = $("#page-top").click(function () {
  const scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll > 0) {
    $(this).addClass("floatAnime"); //クリックしたらfloatAnimeというクラス名が付与
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  }
  return false; //リンク自体の無効化
});
