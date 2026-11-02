/*
 * Columns added to the 2FA schema in better-auth 1.7.x
 * https://better-auth.com/docs/plugins/2fa#schema
 */
exports.up = function (knex) {
    return knex.schema.table("better_auth_twoFactor", (t) => {
        t.integer("failedVerificationCount").defaultTo(0);
        t.timestamp("lockedUntil");
    });
};

exports.down = function (knex) {
    return knex.schema.table("better_auth_twoFactor", (t) => {
        t.dropColumn("failedVerificationCount");
        t.dropColumn("lockedUntil");
    });
};
