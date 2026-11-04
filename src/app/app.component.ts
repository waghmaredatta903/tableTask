import { Component } from '@angular/core';
import { IbookArr, IcourseArr, IcustomerArr, IempArr, IorderArr, IproductArr, IstudentArr } from './modules/student';
import { empArr,studentArr,productArr,courseArr,bookArr,customerArr,orderArr } from './const/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tableTask';

 empArr: Array<IempArr>=empArr;
 stdArr : Array<IstudentArr>=studentArr;
 productArr : Array<IproductArr>=productArr;
 course : Array<IcourseArr>=courseArr;
 bookArr : Array<IbookArr>= bookArr;
 customArr : Array<IcustomerArr>= customerArr;
 orderArr : Array<IorderArr>=orderArr
}
