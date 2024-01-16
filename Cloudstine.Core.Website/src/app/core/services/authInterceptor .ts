import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { UserProfileService } from "app/core/services/user-profile.service";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CoreLoadingScreenService } from "./loading-screen.service";

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router,
        private userProfileService : UserProfileService
         ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let idToken: any; 
        
        if (this.userProfileService.CurrentUserValue) {
            idToken = this.userProfileService.CurrentUserValue.ApplicationToken;
        }
        
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned).pipe(catchError(x=> this.handleAuthError(x)));
        }
        else {
            return next.handle(req).pipe(catchError(x=> this.handleAuthError(x)));
        }
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        //handle your auth error or rethrow
        console.log("In handleerror");
        try {
               // this.loaderService.hide();
        }
        catch
        {

        }
        if (err.status === 401 || err.status === 403) {
            //navigate /delete cookies or whatever
            this.router.navigateByUrl("login");
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return of(err.message); // or EMPTY may be appropriate here
        }
         throw err;
    }


}