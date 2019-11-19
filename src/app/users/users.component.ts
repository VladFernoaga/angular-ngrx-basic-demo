import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GetUsers } from '../store/actions/user.actions';
import { selectUserList } from '../store/selectors/user.selectors';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}
