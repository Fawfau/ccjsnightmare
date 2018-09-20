
Feature('Home');

Scenario('test something',async (I) => {
    I.say('Saya Menuju ke web https://katalon-demo-cura.herokuapp.com')
    I.amOnPage('/');
    I.see('CURA Healthcare Service')
    I.click('#btn-make-appointment')
    I.see('Login')
    I.seeCurrentUrlEquals('/profile.php#login')
    I.fillField('#txt-username','John Doe')
    I.fillField('#txt-password','ThisIsNotAPassword')
    I.click('#btn-login')
    I.wait(1)
    I.dontSee('Login failed! Please ensure the username and password are valid.')
    I.see('Make Appointment');
    I.selectOption('#combo_facility', 'Hongkong CURA Healthcare Center')
    I.checkOption('#chk_hospotal_readmission')
    I.click('#radio_program_none')
    I.click('#txt_visit_date')
    I.click('.datepicker-switch')
    I.click(locate('.table-condensed').find('td .month').withText('Oct'));
    I.click(locate('.table-condensed').find('td').at('4'));
    I.click('#txt_comment')
    I.fillField('#txt_comment', 'I will see you')
    I.click('#btn-book-appointment')
    I.wait(1)
    I.see('Appointment Confirmation')
    I.click('.btn.btn-default')
    I.see('Make Appointment')
    I.click('#menu-toggle')
    I.click(locate('.sidebar-nav').find('a').withText('History'))
    I.see('History')
    I.click('#menu-toggle')
    I.click(locate('.sidebar-nav').find('a').withText('Profil'))
    I.see('Profil')
    I.click('.btn.btn-default')
    I.see('CURA Healthcare Service')
});
