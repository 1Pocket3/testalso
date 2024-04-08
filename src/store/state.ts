import db from '@/db/db.json'

export default {
    dbData: db as any,
    showAuthModal: false,
    showCartModal: false,
    // eslint-disable-next-line
    cart: [] as any
}