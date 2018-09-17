export const customThunk = (store) => {
    return (
        (next) => {
            return (
                (action) => {
                    if (typeof action === 'function') {
                        return action(store.dispatch, store.getState)
                    }
                    return next(action);
                }
            );
        }
    );
};
