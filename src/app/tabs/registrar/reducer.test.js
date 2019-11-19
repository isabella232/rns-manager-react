import reducer from './reducer';
import {
  REQUEST_REGISTRAR_GET_COST, RECEIVE_REGISTRAR_GET_COST,
  REQUEST_REGISTRAR_COMMIT, RECEIVE_REGISTRAR_COMMIT, ERROR_REGISTRAR_COMMIT,
  RECEIVE_REGISTRAR_REVEAL_COMMIT, REQUEST_REGISTRAR_REVEAL_COMMIT, RECEIVE_CAN_REVEAL_COMMIT,
} from './types';

describe('register reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(
        {
          gettingCost: false,
          committing: false,
          committed: false,
          hash: undefined,
          revealing: false,
          revealed: false,
          waiting: false,
          canReveal: false,
        },
      );
  });

  it('should handle REQUEST_REGISTRAR_GET_COST', () => {
    expect(
      reducer({}, {
        type: REQUEST_REGISTRAR_GET_COST,
        duration: 12,
      }),
    )
      .toEqual({
        gettingCost: true,
        duration: 12,
      });
  });

  it('should handle RECEIVE_REGISTRAR_GET_COST', () => {
    expect(
      reducer({}, {
        type: RECEIVE_REGISTRAR_GET_COST,
        rifCost: 12,
      }),
    ).toEqual({
      gettingCost: false,
      rifCost: 12,
    });
  });

  it('should handle REQUEST_REGISTRAR_GET_COST and RECEIVE_REGISTRAR_GET_COST', () => {
    expect(
      reducer({}, {
        type: REQUEST_REGISTRAR_GET_COST,
        duration: 23,
      }),
    )
      .toEqual({
        gettingCost: true,
        duration: 23,
      });

    expect(
      reducer({
        gettingCost: true,
        duration: 23,
      }, {
        type: RECEIVE_REGISTRAR_GET_COST,
        rifCost: 45,
      }),
    ).toEqual({
      gettingCost: false,
      rifCost: 45,
      duration: 23,
    });
  });

  it('should handle REQUEST_REGISTRAR_COMMIT', () => {
    expect(
      reducer({}, {
        type: REQUEST_REGISTRAR_COMMIT,
      }),
    )
      .toEqual({
        committing: true,
      });
  });

  it('should handle RECEIVE_REGISTRAR_COMMIT', () => {
    expect(
      reducer({}, {
        type: RECEIVE_REGISTRAR_COMMIT,
        hash: 'sarasa',
      }),
    ).toEqual({
      committing: false,
      committed: true,
      hash: 'sarasa',
      waiting: true,
    });
  });

  it('should handle ERROR_REGISTRAR_COMMIT', () => {
    expect(
      reducer({}, {
        type: ERROR_REGISTRAR_COMMIT,
      }),
    ).toEqual({
      committing: false,
      committed: false,
    });
  });

  it('should handle REQUEST_REGISTRAR_COMMIT and RECEIVE_REGISTRAR_COMMIT', () => {
    expect(
      reducer({}, {
        type: REQUEST_REGISTRAR_COMMIT,
      }),
    )
      .toEqual({
        committing: true,
      });

    expect(
      reducer({
        committing: true,
      }, {
        type: RECEIVE_REGISTRAR_COMMIT,
        hash: 'sarasa',
      }),
    ).toEqual({
      committing: false,
      committed: true,
      hash: 'sarasa',
      waiting: true,
    });
  });

  it('should handle REQUEST_REGISTRAR_COMMIT and ERROR_REGISTRAR_COMMIT', () => {
    expect(
      reducer({}, {
        type: REQUEST_REGISTRAR_COMMIT,
      }),
    )
      .toEqual({
        committing: true,
      });

    expect(
      reducer({
        committing: true,
      }, {
        type: ERROR_REGISTRAR_COMMIT,
      }),
    ).toEqual({
      committing: false,
      committed: false,
    });
  });

  it('should handle REQUEST_REGISTRAR_REVEAL_COMMIT', () => {
    expect(
      reducer({}, {
        type: REQUEST_REGISTRAR_REVEAL_COMMIT,
      }),
    )
      .toEqual({
        revealing: true,
      });
  });

  it('should handle RECEIVE_REGISTRAR_REVEAL_COMMIT', () => {
    expect(
      reducer({}, {
        type: RECEIVE_REGISTRAR_REVEAL_COMMIT,
      }),
    ).toEqual({
      revealing: false,
      revealed: true,
    });
  });

  it('should handle REQUEST_REGISTRAR_REVEAL_COMMIT and RECEIVE_REGISTRAR_REVEAL_COMMIT', () => {
    expect(
      reducer({}, {
        type: REQUEST_REGISTRAR_REVEAL_COMMIT,
      }),
    )
      .toEqual({
        revealing: true,
      });

    expect(
      reducer({
        revealing: true,
      }, {
        type: RECEIVE_REGISTRAR_REVEAL_COMMIT,
      }),
    ).toEqual({
      revealing: false,
      revealed: true,
    });
  });

  it('should handle RECEIVE_CAN_REVEAL_COMMIT false', () => {
    expect(
      reducer({}, {
        type: RECEIVE_CAN_REVEAL_COMMIT,
        canReveal: false,
      }),
    ).toEqual({
      canReveal: false,
      waiting: true,
    });
  });

  it('should handle RECEIVE_CAN_REVEAL_COMMIT true', () => {
    expect(
      reducer({}, {
        type: RECEIVE_CAN_REVEAL_COMMIT,
        canReveal: true,
      }),
    ).toEqual({
      canReveal: true,
      waiting: false,
    });
  });

  it('should return the initial state when action is not implemented', () => {
    expect(reducer(undefined, {
      type: 'NOT_IMPLEMENTED',
    }))
      .toEqual(
        {
          gettingCost: false,
          committing: false,
          committed: false,
          hash: undefined,
          revealing: false,
          revealed: false,
          waiting: false,
          canReveal: false,
        },
      );
  });
});
