# angular2-draggable

Portfolio 프로젝트에서 드래그로 영역의 위치를 옮기기 위해서 angular2-draggable 모듈을 사용하였다.
angular2-draggable 모듈은 angular 4.x 이상의 버전에서 사용 가능하다.


1. 설치방법

        # if you use npm
        npm install angular2-draggable --save

        # or if you use yarn
        yarn add angular2-draggable


2. import

        import { AngularDraggableModule } from 'angular2-draggable';

        @NgModule({
          imports: [
            ...,
            AngularDraggableModule
          ],
        })
        export class AppModule { }


3. 사용 예시

        <section id="contactContainer" class="contact-container"
            [ngDraggable] = "drag Condition" // 조건에 해당하는 경우만 가능
            ngDraggable [handle]="contactHandle">

            <div class="container-header" #contactHandle> //이 영역에서 drag 해야 함
            </div>
        </section>


참고 > https://xieziyu.github.io/angular2-draggable