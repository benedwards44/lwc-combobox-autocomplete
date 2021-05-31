# LWC Combobox Autocomplete
Simple LWC component for building a autocomplete combobox.

<a href="https://githubsfdeploy.herokuapp.com/app/githubdeploy/benedwards44/lwc-combobox-autocomplete">
    <img 
        alt="Deploy to Salesforce"
        src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png"
    />
</a>


## Usage


`myComponent.html`
```
<c-combobox-autocomplete 
    label="Select Option"
    options={options}
    placeholder="Select an Option"
    onselectoption={handleOptionChange}
    classes="slds-m-bottom_small"
>
</c-combobox-autocomplete>
```

`myComponent.js`
```
import { LightningElement } from 'lwc';
 
const options = [
    {
        value: 'Option 1',
        label: 'Option 1'
    },
    {
        value: 'Option 2',
        label: 'Option 2'
    },
    {
        value: 'Option 3',
        label: 'Option 3'
    },
];

export default class MyComponent extends LightningElement {

    options = options;

    selectedOptionValue;
    selectedOptionLabel;

    handleOptionChange(event) {
        this.selectedOptionValue = event.detail.value;
        this.selectedOptionLabel = event.detail.label;
    }
}
```

