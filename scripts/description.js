let isPlaying = false;
      let backgroundSoundMode = window.localStorage.backgroundSoundMode;

      $('#backgroundAudioPanel')[0].volume = 0.5;

      function playAudio() {
        if (!isPlaying) {
          if (backgroundSoundMode === 'true') {
            $('#backgroundAudioPanel')[0].play();
          }
          
          $('#practiceAudioPanel')[0].play();
          $('#playButton').html('<i class="icon-control-pause float-right" style="width: 24px; height: 24px;"></i>');
          isPlaying = true;
        } else {
          if (backgroundSoundMode === 'true') {
            $('#backgroundAudioPanel')[0].pause();
          }

          $('#practiceAudioPanel')[0].pause();
          $('#playButton').html('<i class="icon-control-play float-right" style="width: 24px; height: 24px;"></i>');
          isPlaying = false;
         }
      }

      function hideAudioEndInfo() {
        $('#audio-end-info').css('display', 'none');
      }

      $('#practiceAudioPanel').on('ended', function() {
        $('#practiceAudioPanel')[0].pause();
        $('#practiceAudioPanel')[0].currentTime = 0;
        
        $('#playButton').html('<i class="icon-control-play float-right" style="width: 24px; height: 24px;"></i>');
        $('#audio-end-info').css('display', 'block');

        if (backgroundSoundMode === 'true') {
            $('#backgroundAudioPanel')[0].pause();
            $('#backgroundAudioPanel')[0].currentTime = 0;
        }

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
        $('#practiceAudioPanel')[0].pause();
        $('#practiceAudioPanel')[0].currentTime = 0;
        
        $('#playButton').html('<i class="icon-control-play float-right" style="width: 24px; height: 24px;"></i>');

        if (backgroundSoundMode === 'true') {
            $('#backgroundAudioPanel')[0].pause();
            $('#backgroundAudioPanel')[0].currentTime = 0;
        }

        isPlaying = false;
      });