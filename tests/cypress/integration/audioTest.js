import AudioPage from '../pages/audioPage';
const audioPage = new AudioPage();

describe('SBS Audio Page Test', () => {
 
  it('verify title of Audio Page', () => {     
      audioPage.navigate('');
      audioPage.getPageTitle().should('eq', 'SBS Language | SBS Hindi News 13 July 2021: More financial support amid extended NSW lockdown')
  })

  it('verify values of subscribe drop down', () => {
      audioPage.navigate('');
      var dropDownValueToVerify = ["APPLE PODCASTS", "GOOGLE PODCASTS", "SPOTIFY"];
      audioPage.clickSubscribeDropDownAndVerifyDropDownValues(dropDownValueToVerify);
  })

  it('verify play and pause feature on Audio Page', () => {
      audioPage.navigate('');
      audioPage.clickPlayPauseButton();
      audioPage.verifyAudioIsPlaying();
      cy.wait(5000);
      audioPage.clickPlayPauseButton();
      audioPage.verifyAudioIsPaused();
      cy.wait(5000);
  })

  it('Verify volume off works fine', () => {
      audioPage.navigate('');
      audioPage.clickPlayPauseButton();
      cy.wait(2000)
      audioPage.verifyAudioIsPlaying();
      audioPage.launchFullViewAudioScrub();
      audioPage.clickOnVolumeButton();
      audioPage.verifyAudioIsMuted();
      cy.wait(1000)
  })

  it('Verify clicking on 20 seconds forward , forwaeds the progress and audio by 20 seconds', () => {
      audioPage.navigate('');
      audioPage.clickPlayPauseButton();
      audioPage.verifyAudioIsPlaying();
      audioPage.launchFullViewAudioScrub();
      audioPage.clickOnTwentySeconforwardButton();
      var increaseInWidth = 30;
      audioPage.verifyWidthOfAudioProgressBarIncreases(increaseInWidth)
      cy.wait(3000)
    })

    it('Verify Language Toggle', () => {

      audioPage.navigate('');
      audioPage.clickOnLanguageToggle();
      audioPage.verifyAvailableLanguage('English');
    })

    it('Get all audios for the week', () => {
      cy.request('https://www.sbs.com.au/guide/ajax_radio_program_catchup_data/language/hindi/location/NSW/sublocation/Sydney').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(7)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      // more assesrtions can be added on the response body

      })
    })
})








  
