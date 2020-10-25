import { AbstractControl, ValidationErrors } from '@angular/forms';


export class EmailValidators {
    static shoudBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if ((control.value as string) == "ayarimed@gmail.com" ){
                    resolve ({
                        shoudBeUnique: true 
                    })
                } else {
                    resolve(null)
                }
            }, 3000)
        });
    }
}