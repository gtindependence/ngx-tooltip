import { Component, ViewChild } from '@angular/core';
import { TooltipOptions, TooltipDirective, TooltipService } from '@gtindependence/ngx-tooltip';
import {roundArrow} from 'tippy.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    animateOptions: Partial<TooltipOptions> = {
        animateFill: true
    };

    customSchemeOptions: Partial<TooltipOptions> = {
        trigger: 'manual',
        interactive: true,
        hideOnClick: false,
    };

    @ViewChild('customSchemeTooltip', { read: TooltipDirective }) customSchemeTooltip: TooltipDirective;

    constructor(
        public tooltipService: TooltipService
    ) {}

    showCustomSchemeTooltip() {
        this.customSchemeTooltip.show();
    }

    hideCustomSchemeTooltip() {
        this.customSchemeTooltip.hide();
    }

    protected readonly roundArrow = roundArrow;
}
