import { LightningElement, api, track } from 'lwc';

export default class ComboboxAutocomplete extends LightningElement {

    @api classes;
    @api label;
    @api placeholder;
    @api value;
    @api options;
    
    @track isFocussed = false;

    filteredOptions = [];

    connectedCallback() {
        this.filteredOptions = [...this.options];
    }

    filterOptions(event) {
        const filterText = event.detail.value;
        this.filteredOptions = this.options.filter(option => {
            return option.label.toLowerCase().includes(filterText.toLowerCase());
        });
    }

    handleSelectOption(event) {
        this.value = event.currentTarget.dataset.label;
        const custEvent = new CustomEvent(
            'selectoption', {
                detail: {
                    value: event.currentTarget.dataset.value,
                    label: event.currentTarget.dataset.label
                }
            }
        );
        this.dispatchEvent(custEvent);

        // Close the picklist options
        this.isFocussed = false;
    }

    get noOptions() {
        return this.filteredOptions.length === 0;
    }

    get dropdownClasses() {
        
        let dropdownClasses = 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click';
        
        // Show dropdown list on focus
        if (this.isFocussed) {
            dropdownClasses += ' slds-is-open';
        }

        return dropdownClasses;
    }

    handleFocus() {
        this.isFocussed = true;
    }

    handleBlur() {
        // Timeout to ensure click event is captured before the 
        // options are hidden
        setTimeout(() => { this.isFocussed = false; }, 100);
    }
}