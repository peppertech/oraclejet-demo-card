# oraclejet-demo-card

sample of a composite component to test delivery via nmp

##Installation and use

npm install oraclejet-demo-card

Add the following to the HTML view that you want to load the card into.

    <div id="card-holder" class="oj-flex">
        <oj-for-each data="[[employees]]" data-oj-as="card">
            <oraclejet-demo-card class="oj-flex-item"
                    name="{{card.name}}"
                    avatar="{{card.avatar}}"
                    work-title="{{card.title}}"
                    work-number="{{card.work}}"
                    email="{{card.email}}"
                    background-image="{{card.backgroundImage}}">
            </oraclejet-demo-card>
        </oj-for-each>
    </div>

In your viewmodel provide an array named "employees" that contains the following fields.

[{
name: 'Fred Flintstone',
avatar: 'images/debraphaely.png', <optional>
title: 'Purchasing Director',
work: '5171278899',
email: 'fred.flintstone@example.com',
backgroundImage: 'images/card-background.png' <optional>
}]

In the viewmodel add a reference to the "loader.js" module from the oraclejet-demo-card installation folder

'oraclejet-demo-card/loader'
