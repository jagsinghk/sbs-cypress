import BasePage from './basePage.js'

export default class AudioPage extends BasePage {

    constructor() {
        super()
    }
    
    username     = "#username";
    password     = "#password";
    alertMessage = ".alert";
    submitButton = "#_submit";
    subscribeButton = 'li[class="podcast-subscribe__item"]';
    playPauseButton = 'span[class = "audiotrack__icon audiotrack__icon--play-pause"]';
    audioIsPlaying = 'div[class = "audio-player audio-player--global is-loaded is-media-tracked is-media-playing is-touched"]';
    audioIsPaused = 'div[class = "audio-player audio-player--global is-loaded is-media-tracked is-touched is-media-paused"]';
    trackInfoTile = 'div[class = "audio-player__trackinfo-title"]';
    volumeButton = 'div[class = "audio-player__volume-bar"]';
    twentySecondsForwardButton = 'button[class="audio-player__button audio-player__button--step-forward button button--clean"]'
    audioProgressBar = 'div[class="audio-player__progress"]'
    languageToggle = 'a[class = "dropdown__button global-nav__language-toggle toggle"]'
    languageOptionsVisible = 'div[class = "dropdown__body"]' 
    availableLanguages = 'div[class = "language-toggle__option-icon"]'

    clickSubscribeDropDownAndVerifyDropDownValues(data) {
         cy
         .get(this.subscribeButton).each(($el, index, $list) => {
         expect($el.text()).to.equal(data[index])
        
        })
    }

    clickPlayPauseButton() {
        cy
        .get(this.playPauseButton).click();
    }

    verifyAudioIsPlaying() {

        cy.get(this.audioIsPlaying)
        .scrollIntoView()
        .should('be.visible')
    }

    verifyAudioIsPaused() {

        cy.get(this.audioIsPaused)
        .scrollIntoView()
        .should('be.visible')
    }

    launchFullViewAudioScrub() {

        cy.get(this.trackInfoTile)
        .click()
    }

    clickOnVolumeButton() {
        cy
        .get(this.volumeButton)
        .click();
    }

    verifyAudioIsMuted() {

        // To do
    }

    clickOnTwentySeconforwardButton() {

        cy.get(this.twentySecondsForwardButton)
        .click()
    }

    verifyWidthOfAudioProgressBarIncreases(increaseInWidth) {
        cy
        .get(this.audioProgressBar)
        .invoke('width').should('be.greaterThan', increaseInWidth)
    }

    clickOnLanguageToggle() {

        cy
        .get(this.languageToggle)
        .click()
    }

    verifyAvailableLanguage(language) {

        cy
        .get(this.languageToggle)
        .should('be.visible')

        cy
        .get(this.availableLanguages)
        .should('have.text', "English")
    }
}