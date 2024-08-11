$(document).ready(function () {
    var overlayHtml = '<div id="overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 1); z-index: 999;">';
    overlayHtml += '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white; font-size: 24px;">Xin hãy mở chế độ ngang</div>';
    overlayHtml += '</div>';

    // Thêm màn đen và thông báo vào body của trang
    $('body').append(overlayHtml);

    function checkOrientation() {
        if (window.innerWidth > window.innerHeight) {
            $('#overlay').fadeOut();
            $('.container').show();
        } else {
            $('#overlay').fadeIn(); 
            $('.container').hide();
        }
    }
    checkOrientation();
    $(window).on('load resize', checkOrientation);
    $('#kangaroo').click(function () {
        var $this = $(this);
        var startPosition = $this.position().left;
        var containerWidth = $('.container').width();
        var imageWidth = $this.width();
        var kangarooAudio = document.getElementById('kangaroo-audio');

        kangarooAudio.play(); // Play the kangaroo audio

        if (startPosition < containerWidth - imageWidth) {
            $this.animate({ left: containerWidth - imageWidth }, 5000);
        } else {
            $this.animate({ left: 0 }, 5000);
        }
    });

    // Xử lý sự kiện click cho hình ảnh Swallow
    $('#swallow').click(function () {
        var $this = $(this);
        var startPosition = $this.position().left;
        var containerWidth = $('.container').width();
        var imageWidth = $this.width();
        var swallowAudio = document.getElementById('swallow-audio');

        swallowAudio.play(); // Play the swallow audio

        if (startPosition < containerWidth - imageWidth) {
            $this.animate({ left: containerWidth - imageWidth }, 2380);
        } else {
            $this.animate({ left: 0 }, 2380);
        }
    });

    $('#restart').click(function () {
        $('#kangaroo, #swallow').stop().animate({ left: 0 }, 1000);
    });

    $('#run').click(function () {
        var containerWidth = $('.container').width();
        var kangarooWidth = $('#kangaroo').width();
        var swallowWidth = $('#swallow').width();
        
        $('#kangaroo').stop().animate({ left: containerWidth - kangarooWidth }, 5000);
        $('#swallow').stop().animate({ left: containerWidth - swallowWidth }, 2380);
    });

    $('[data-toggle="tooltip"]').tooltip();
});
