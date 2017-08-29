
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html',
})
export class JumbotronComponent {
    jbtHeading: string;
    jbtText: string;
    jbtBtnText: string;
    jbtUrl: string;
    constructor() {
        this.jbtHeading="Travis A1";
        this.jbtText="Whatever i don't remember";
        this.jbtBtnText="Read more";
        this.jbtUrl="/about";
    }
}
