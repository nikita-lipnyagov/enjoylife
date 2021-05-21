let isPlaying = false;
let intervalId;

$('#backgroundAudioPanel')[0].volume = 0.2;

function playAudio() {
  const backgroundAudioPanel = $('#backgroundAudioPanel')[0];
  const practiceAudioPanel = $('#practiceAudioPanel')[0];

  if (!isPlaying) {
      backgroundAudioPanel.play();
      practiceAudioPanel.play();
      $('#playButton').html('<i class="icon-control-pause float-right" style="width: 24px; height: 24px;"></i>');

      intervalId = window.setInterval(function() {
        $('#minutesToPracticeEnd').html(Math.ceil((practiceAudioPanel.duration - practiceAudioPanel.currentTime)/60));
      }, 3000);

      isPlaying = true;
    } else {
      backgroundAudioPanel.pause();
      practiceAudioPanel.pause();
      $('#playButton').html('<i class="icon-control-play float-right" style="width: 24px; height: 24px;"></i>');

      clearInterval(intervalId);

      isPlaying = false;
    }
}

function hideAudioEndInfo() {
  $('#audio-end-info').css('display', 'none');

  $('#audioModalLabel').html(`Practice will end in <span id="minutesToPracticeEnd">${Math.ceil((practiceAudioPanel.duration - practiceAudioPanel.currentTime)/60)}</span> mins`);
}

$('#practiceAudioPanel').on('ended', function() {
  $('#backgroundAudioPanel')[0].pause();
  $('#backgroundAudioPanel')[0].currentTime = 0;

  $('#practiceAudioPanel')[0].pause();
  $('#practiceAudioPanel')[0].currentTime = 0;
        
  $('#playButton').html('<i class="icon-control-play float-right" style="width: 24px; height: 24px;"></i>');
  $('#audio-end-info').css('display', 'block');

  clearInterval(intervalId);

  $('#audioModalLabel').html('Practice ended');

  isPlaying = false;
});

$('#replayButton').hover(function(){
    $('#replaySvg').css('fill', 'var(--text-main-color)');
  }, function(){
    $('#replaySvg').css('fill', 'var(--main-bg-color)');
});

$('#forwardButton').hover(function(){
    $('#forwardSvg').css('fill', 'var(--text-main-color)');
  }, function(){
    $('#forwardSvg').css('fill', 'var(--main-bg-color)');
});

$("#audioModal").on("hidden.bs.modal", function () {
  $('#backgroundAudioPanel')[0].pause();
  $('#backgroundAudioPanel')[0].currentTime = 0;

  $('#practiceAudioPanel')[0].pause();
  $('#practiceAudioPanel')[0].currentTime = 0;
        
  $('#playButton').html('<i class="icon-control-play float-right" style="width: 24px; height: 24px;"></i>');

  clearInterval(intervalId);

  isPlaying = false;
});
