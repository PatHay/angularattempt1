import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { PollsComponent } from './polls/polls.component';
import { NewpollComponent } from './newpoll/newpoll.component';
import { VoteComponent } from './vote/vote.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent , pathMatch: 'full' },
    { path: 'polls', component: PollsComponent },
    { path: 'create', component: NewpollComponent },
    { path: 'vote/:id', component: VoteComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);