import { PipeTransform, Pipe } from '@angular/core'

@Pipe(
    { name: 'curtailText'}
)
export class CurtailTextPipe implements PipeTransform {

    transform(text: string, size: number): string {

        if (size == null) {
            size = 40
        }
        if (text.length > size) {

            return text.substr(0, size) + "..."
        }

        return text
    }

}