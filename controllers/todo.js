const { db } = require('../app/db');

exports.getTodos = async (root, args, context) => {
    try {
        const results = await db.query('select * from todos');
        return results.rows;
    } catch (err) {
        console.log(err);
    }
}

exports.createTodo = async (root, args, context) => {
    console.log(context);
    try {
        const results = await db.query('insert into todos (todo, user_id) values ($1, $2)', [args.title, context.uid]);
        if (results.rowCount >= 1) {
            return true;
        }

        return false;
    } catch (err) {
        console.log(err);
    }
}

exports.deleteTodo = async (root, args, context) => {
    try {
        const results = await db.query('delete from todos where id=$1', [args.id]);
        if (results.rowCount >= 1) {
            return true;
        }

        return false;
    } catch (err) {
        console.log(err);
    }
}

exports.markTodoCompleted = async (root, args, context) => {
    try {
        const results = await db.query('update todos set completed = true where id=$1', [args.id]);
        if (results.rowCount >= 1) {
            return true;
        }

        return false;
    } catch (err) {
        console.log(err);
    }
}

exports.markTodoUncompleted = async (root, args, context) => {
    try {
        const results = await db.query('update todos set completed = false where id=$1', [args.id]);
        if (results.rowCount >= 1) {
            return true;
        }

        return false;
    } catch (err) {
        console.log(err);
    }
}