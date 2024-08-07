$(document).ready(function () {
    // Xử lý sự kiện click cho hình ảnh Kangaroo
    $('#kangaroo').click(function () {
        var $this = $(this);
        var startPosition = $this.position().left;
        var containerWidth = $('.container').width();
        var imageWidth = $this.width();
        var kangarooAudio = document.getElementById('kangaroo-audio');

        kangarooAudio.play(); // Play the kangaroo audio

        if (startPosition < containerWidth - imageWidth) {
            $this.animate({ left: containerWidth - imageWidth }, 5000); // Thay đổi thời gian di chuyển nếu cần
        } else {
            $this.animate({ left: 0 }, 5000); // Thay đổi thời gian di chuyển nếu cần
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
            $this.animate({ left: containerWidth - imageWidth }, 2380); // Thay đổi thời gian di chuyển nếu cần
        } else {
            $this.animate({ left: 0 }, 2380); // Thay đổi thời gian di chuyển nếu cần
        }
    });

    // Xử lý sự kiện click cho nút Restart
    $('#restart').click(function () {
        $('#kangaroo, #swallow').stop().animate({ left: 0 }, 1000); // Thay đổi thời gian di chuyển nếu cần
    });

    // Xử lý sự kiện click cho nút Run để di chuyển cả hai hình ảnh
    $('#run').click(function () {
        var containerWidth = $('.container').width();
        var kangarooWidth = $('#kangaroo').width();
        var swallowWidth = $('#swallow').width();
        
        $('#kangaroo').stop().animate({ left: containerWidth - kangarooWidth }, 5000);
        $('#swallow').stop().animate({ left: containerWidth - swallowWidth }, 2380);
    });

    // Khởi tạo tooltips với Bootstrap
    $('[data-toggle="tooltip"]').tooltip();
});
