import { Component, OnInit } from '@angular/core';
import {DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder} from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import {ScriptLoaderService} from '../services/script-loader.service';

declare var hello: any;
declare var getUnitCopay: any;
declare var getServerData: any;
@Component({
  selector: 'app-dyno-forms',
  templateUrl: './dyno-forms.component.html',
  styleUrls: ['./dyno-forms.component.scss']
})
// @ts-ignore
export class DynoFormsComponent implements OnInit {

  SERVER_DATA: any[];

  globalItems: DynamicFormBuildConfig;
  globalUiBindings: string[]; // = SERVER_DATA[0].meta[0].globalbindings;

  existing: DynamicFormBuildConfig;
  existingUiBindings: string[]; // = SERVER_DATA[0].meta[0].existingbindings;
  measureName: string; // = SERVER_DATA[0].meta[0].measureName;

  replacement: DynamicFormBuildConfig;
  replacementUiBindings: string[]; // = SERVER_DATA[0].meta[0].replacementbindings;

  dynamicFormConfiguration: DynamicFormConfiguration;

  constructor(private dynamicFormBuilder: RxDynamicFormBuilder, private scripts: ScriptLoaderService) {
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.scripts.loadScript('measure-calc').then(data => {
      this.SERVER_DATA = JSON.parse(getServerData());
      this.globalUiBindings = this.SERVER_DATA[0].meta[0].globalbindings;
      this.existingUiBindings = this.SERVER_DATA[0].meta[0].existingbindings;
      this.replacementUiBindings = this.SERVER_DATA[0].meta[0].replacementbindings;
      this.measureName = this.SERVER_DATA[0].meta[0].measureName;
      ReactiveFormConfig.set({
        validationMessage: {
          required: 'This Field is required'
        }
      });
      this.SERVER_DATA[0].replacements[0].source = this.SERVER_DATA[0].meta[0].measureData
        .map(f => ({value: f.measureID, text: f.description}) );
      this.globalItems = this.dynamicFormBuilder.formGroup(this.SERVER_DATA[0].globals, this.dynamicFormConfiguration);
      this.existing = this.dynamicFormBuilder.formGroup(this.SERVER_DATA[0].existing, this.dynamicFormConfiguration);
      this.replacement = this.dynamicFormBuilder.formGroup(this.SERVER_DATA[0].replacements, this.dynamicFormConfiguration);
    }).catch(error => console.log(error));
  }



  pressme(): void{
    const watts = this.existing.formGroup.value.wattage;
    const copayAmount = getUnitCopay(watts, 22);
    console.log('this is the copay amount from line 61 in dyno-forms: ', copayAmount);
  }

}
