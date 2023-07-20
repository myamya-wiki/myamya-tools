var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    // プレイヤーが準備完了の際に呼ばれるコールバック
    console.log('Player is ready!');
}

function loadVideo() {
    var videoId = document.getElementById('videoIdInput').value;
    player.loadVideoById(videoId);
}
