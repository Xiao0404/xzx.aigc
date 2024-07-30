const router = require('@koa/router')();
const jwt = require('../utils/jwt.js');
const { findNoteListByType,findNoteDetailById } = require('../controllers/index.js');

router.get('/findNoteListByType', jwt.verify(), async (ctx, next) => {
    // 检验token合理再去数据库中查找数据 返回给前端
    const { note_type } = ctx.request.query; // 从 query 中提取 note_type
    const res = await findNoteListByType(note_type, ctx.userId);
    try{
        if(res.length){
            ctx.body = {
                code: '800',
                msg: '查找成功',
                data: res
            }
        }else {
            ctx.body = {
                code: '800',
                data: res,
                msg: '当前分类下没有数据'
            }
    
        }
    }catch(error){
        ctx.body = {
            code: '805',
            data: error,
            msg: '服务器异常'
        }
    }

});



router.get('/findNoteDetailById',async (ctx, next) => {
    
    const { note_id } = ctx.request.query; // 从 query 中提取 note_id
    const res = await findNoteDetailById(note_id)
    try{
        if(res.length){
            ctx.body = {
                code: '800',
                msg: '查找成功',
                data: res
            }
        }else {
            ctx.body = {
                code: '800',
                data: res,
                msg: '该笔记不存在'
            }
    
        }
    }catch(error){
        ctx.body = {
            code: '805',
            data: error,
            msg: '服务器异常'
        }
    }
})





module.exports = router;
