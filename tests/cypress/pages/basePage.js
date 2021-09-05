export default class BasePage {

    baseUrl       = "/language/english/audio/sbs-hindi-news-13-july-2021-more-financial-support-amid-extended-nsw-lockdown";
  //  cookieMessage = "#ccc-close";
    
    navigate() {
        cy
        .visit(this.baseUrl)

    }

    getPageTitle() {
        return cy.title()
    }


}