google.load("client", "1", {
    callback: function () {
        // Google APIクライアントを初期化
        gapi.client.init({
            apiKey: 'AIzaSyCFMb23YnOjTKv1ucVWJrSc6I0tQBYIlTI',
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]
        });
    }
});

function loadVideo() {
    var videoId = document.getElementById('videoIdInput').value;

    // YouTube Data APIを使用して動画の情報を取得
    gapi.client.youtube.videos.list({
        part: 'player',
        id: videoId
    }).then(function (response) {
        var videoPlayerUrl = response.result.items[0].player.embedHtml;
        var playerDiv = document.getElementById('player');

        // 動画を再生するiframeを生成して表示
        playerDiv.innerHTML = videoPlayerUrl;
    }, function (error) {
        console.error('Error:', error);
    });
}
