export class JetzMitPageObjects{
    NOCHKEIN_PAYBACK_XPATH = `//label[text()="Noch keine PAYBACK Karte? Neue Karte auswählen."]/span`
    
    CARD_RADIO_BUTTON_SELECT_XPATH = `//div[@class='swiper-wrapper']/div[@class='swiper-slide pb-card-picker__cards swiper-slide-active']/div/div/div/img[@alt="cardType"]`
    CARD_RADIO_BUTTON_SEARCH_AND_SELECT_XPATH =`//div[@class='swiper-wrapper']/div[@class='swiper-slide pb-card-picker__cards swiper-slide-active']/div/div[2]`
    NOCHKEIN_WEITER_BUTTON_XPATH = `//label[text()='Noch keine PAYBACK Karte? Neue Karte auswählen.']/../../../div[6]/div/div/div/span[text()="Weiter"]/..`
    NEXT_ICON_CSS = `div.pb-slider__arrow-right`
    
    //EMAIL_ID_TEXTBOX_CSS = `input#email`
    EMAIL_ID_TEXTBOX_ID = `#email`
    //PIN_TEXTBOX_CSS = `input#pin`
    PIN_TEXTBOX_ID = `input#pin`
    ZUGANGDATEN_WEITER_BUTTON_XPATH = `//h3[contains(text(),'Zugangsdaten')]/../../div[2]/div[2]/div[3]/div/div/span[text()='Weiter']`
    
    NURNOCHEINSCHRITT_WEITER_BUTTON_XPATH = `//div[contains(text(),"Nur noch ein Schritt")]`
    
    ERROR_MESSAGE_CSS = `div.pb-form-field__error-msg.pb-form-field__error-msg_hidden`

    SALUTATION_ID = `#salutation`
    FIRST_NAME_ID = `#firstName`
    LAST_NAME_ID = `#lastName`
    DOB_CSS = `[placeholder="TT\\/MM\\/JJJJ"]`
    DOB_DATE_CSS = `[placeholder="TT"]`
    DOB_MONTH_CSS = `[placeholder="MM"]`
    DOB_YEAR_CSS = `[placeholder="JJJJ"]`

    STREET_ID = `#street`
    FLOOR_ID = `#floor`
    ZIP_CODE_ID = `#zipCode`
    CITY_ID = `#city`


}

