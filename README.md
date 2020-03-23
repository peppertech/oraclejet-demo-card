# oraclejet-demo-card
sample of a composite component to test delivery via nmp

##Installation and use


npm install oraclejet-demo-card


Add the following to the HTML view that you want to load the card into.

    <div id="card-holder" class="oj-flex">
        <!-- ko foreach: employees -->
        <oraclejet-demo-card class="oj-flex-item" 
                   name="{{name}}" 
                   avatar="{{avatar}}" 
                   work-title="{{title}}" 
                   work-number="{{work}}" 
                   email="{{email}}" 
                   background-image="{{backgroundImage}}">
        </oraclejet-demo-card>
        <!-- /ko -->
    </div>
	
In your viewmodel provide an array named "employees" that contains the following fields.

[{
	name: 'Fred Flinstone',
	avatar: 'images/composites/debraphaely.png', <optional>
	title: 'Purchasing Director',
	work: '5171278899',
	email: 'fred.flinstone@example.com',
	backgroundImage: 'images/composites/card-background.png' <optional>
}]

In the viewmodel add a reference to the "loader.js" module from the oraclejet-demo-card installation folder

'oraclejet-demo-card/loader'
