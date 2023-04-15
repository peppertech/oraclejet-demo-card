# oraclejet-demo-card

sample of a composite component to test delivery via nmp

## Installation and use

_npm install oraclejet-demo-card_

Add the following to the HTML view that you want to load the card into.

```html
<div id="card-holder" class="oj-flex">
  <oj-bind-for-each data="[[employees]]">
    <template>
      <demo-card
        class="oj-flex-item"
        name="[[$current.data.name]]"
        avatar="[[$current.data.avatar]]"
        work-title="[[$current.data.title]]"
        work-number="[[$current.data.work]]"
        email="[[$current.data.email]]"
      >
      </demo-card>
    </template>
  </oj-bind-for-each>
</div>
```

In your viewmodel provide an array named "employees" that contains the following fields.

```javascript
[{
    name: 'Fred Flintstone',
    avatar: 'images/debraphaely.png', <optional>
    title: 'Purchasing Director',
    work: '5171278899',
    email: 'fred.flintstone@example.com',
    backgroundImage: 'images/background.png', <optional>
}]

```

In the viewmodel add a reference to the "loader.js" module from the oraclejet-demo-card installation folder

'oraclejet-demo-card/loader'
