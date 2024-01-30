import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";


import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataGridComponent } from './data-grid/data-grid.component';
import { ActionRendererComponent } from './action-renderer/action-renderer.component';
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from "@angular/common/http";
import { FormlyModule } from "@ngx-formly/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LabelWrapper } from "./label-wrapper.component";
import { SanitizeHtmlPipe } from "./pipe/domsanitizer.pipe";
import { MessageComponent } from "./dialog/message/message.component";
import { SubjectService } from "./services/subject.service";
import { InsertITDSubmissionToPOIService } from "./services/InsertITDSubmissionToPOI.service";


@NgModule({
	declarations: [
		
		DataGridComponent,
		ActionRendererComponent,
	
		//DatePikerComponent,
		//RemarkTooltipComponent,
		LabelWrapper,
		SanitizeHtmlPipe,
		
		
		//MessageComponent,
		
	],
	
	imports: [
		
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AgGridModule,
		HttpClientModule,
	// 	FormlyModule.forRoot({
	// 		types: [{ name: 'remark', component: RemarkTooltipComponent },{ name: 'poi-hraUploadDocType', component: POIHRAUploadDocumentTypeComponent },{ name: 'repeat', component: RepeatTypeComponent },{ name: 'itd-repeat', component: ITDRepeatTypeComponent },{ name: 'hra-repeat', component: HRARepeatTypeComponent },{ name: 'poi-repeat', component: POIRepeatTypeComponent },{ name: 'poi-repeat-uploadDocument', component: POIUploadDocRepeatTypeComponent },{ name: 'date',
	// 		component: DatePikerComponent,
	// 		wrappers: ['label'],
	// 	  },{ name: 'deduction-section16-repeat', component: ITDRepeatDdeductionSection16Component },{ name: 'eye-button', component: EyeButtonTypeComponent }],
	// 	  wrappers: [
    //     { name: 'label', component: LabelWrapper },
      
    //   ]
	// 	}),
		NgbModule
	],
	exports: [
		SanitizeHtmlPipe,
		DataGridComponent,
		ActionRendererComponent,
		//MessageComponent
	],
	providers: [
		DatePipe,
		SubjectService,
		InsertITDSubmissionToPOIService
	],
})
export class SharedModule { }
