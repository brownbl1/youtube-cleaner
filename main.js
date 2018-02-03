$(document).ready(() => {
  setInterval(() => {
    const $autoplay = $('#autoplay-checkbox')
    if ($autoplay.prop('checked')) {
      console.log('disable autoplay')
      $autoplay.prop('checked', false)
    }
  }, 10000)

  setInterval(() => {
    const $theaterMode = $('.ytp-size-button')
    if ($theaterMode['0'].title === 'Theater mode') {
      $theaterMode.click()
    }

    $('.ytp-endscreen-content').hide()
    $('#related').hide()
    $('#info').css({ width: '100%' })
  }, 1000)
})
