import { Action, INITIAL_STATE } from '@ngrx/store';

class Cart implements Action {
  readonly type = 'Cart';
}

const reducer = (state = INITIAL_STATE, action: Action) => {
  switch(action.type) {
    case 'Cart':
      return{ ...state, counter: state}
  }
}
