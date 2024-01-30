import * as moment from 'moment';

export class BaseService
{


 public FormatDate(value:Date):string
 {
     return moment(value).format('DD-MM-YYYY');
 }


}