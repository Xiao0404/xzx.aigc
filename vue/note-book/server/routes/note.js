const router = require('@koa/router')();
const jwt = require('../utils/jwt.js');
const { findNoteListByType } = require('../controllers/index.js');

router.get('/findNoteListByType', jwt.verify(), async (ctx, next) => {
    // 检验token合理再去数据库中查找数据 返回给前端
    const { note_type } = ctx.request.query; // 从 query 中提取 note_type
    const res = await findNoteListByType(note_type, ctx.userId);
    ctx.body = res; // 返回查询结果给前端
    console.log(res);
});

module.exports = router;
