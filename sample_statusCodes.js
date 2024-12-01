// authController Status Codes
const USER_NAME_IS_NOT_PROVIDED = 100;
const NAME_OF_USER_IS_NOT_PROVIDED = 101;
const USER_PRIMARY_EMAIL_IN_NOT_PROVIDED = 102;
const USER_PASSWORD_IS_NOT_PROVIDED = 103;
const USER_ALREADY_EXIST = 104;
const AUTHENTICATION_TOKEN_GENERATION_ERROR = 105;
const AUTHENTICATION_TOKEN_IS_GENERATED = 106;
const USER_NOT_EXIST = 107;
const USER_INVALID_CREDENTIAL = 108;
const USER_REGISTERED_SUCCESSFULLY = 109;
const USER_CREDENTIAL_VERIFIED = 110;
const USER_VERIFIED_WITH_AUTHENTICATION_TOKEN = 111;
const USER_UPDATED_SUCCESSFULLY = 113;

module.exports = {
    USER_NAME_IS_NOT_PROVIDED,
    NAME_OF_USER_IS_NOT_PROVIDED,
    USER_PRIMARY_EMAIL_IN_NOT_PROVIDED,
    USER_PASSWORD_IS_NOT_PROVIDED,
    USER_ALREADY_EXIST,
    AUTHENTICATION_TOKEN_GENERATION_ERROR,
    AUTHENTICATION_TOKEN_IS_GENERATED,
    USER_NOT_EXIST,
    USER_INVALID_CREDENTIAL,
    USER_REGISTERED_SUCCESSFULLY,
    USER_CREDENTIAL_VERIFIED,
    USER_VERIFIED_WITH_AUTHENTICATION_TOKEN,
    USER_UPDATED_SUCCESSFULLY,
}

// userController Status Codes
const FETCH_ALL_USERS_IS_SUCCESSFUL = 120;
const USER_FOUND_SUCCESSFULLY = 121;

module.exports = {
    FETCH_ALL_USERS_IS_SUCCESSFUL,
    USER_FOUND_SUCCESSFULLY,
}

// taskController Status Codes
const TASK_FETCHED_SUCCESSFULLY = 130;
const TASK_CREATOR_IS_NOT_PROVIDED = 131;
const TASK_TITLE_IS_NOT_PROVIDED = 132;
const TASK_BASICDETAILS_IS_NOT_PROVIDED = 133;
const TASK_TIMINGANDSCHEDULE_IS_NOT_PROVIDED = 134;
const TASK_CREATED_SUCCESSFULLY = 135;
const TASK_UPDATED_SUCCESSFULLY = 136;
const TASK_NOT_FOUND = 137;
const TASK_DELETED_SUCCESSFULLY = 138;

module.exports = {
    TASK_FETCHED_SUCCESSFULLY,
    TASK_CREATOR_IS_NOT_PROVIDED,
    TASK_TITLE_IS_NOT_PROVIDED,
    TASK_BASICDETAILS_IS_NOT_PROVIDED,
    TASK_TIMINGANDSCHEDULE_IS_NOT_PROVIDED,
    TASK_CREATED_SUCCESSFULLY,
    TASK_UPDATED_SUCCESSFULLY,
    TASK_NOT_FOUND,
    TASK_DELETED_SUCCESSFULLY,
}

// teamController Status Codes
const TEAM_NOT_FOUND = 140;
const TEAM_FOUND_SUCCESSFULLY = 141;
const TEAMNAME_IS_NOT_PROVIDED = 142;
const TEAM_BASICDETAILS_IS_NOT_PROVIDED = 143;
const TEAM_MEMBERS_IS_NOT_PROVIDED = 144;
const TEAM_LEADER_IS_NOT_PROVIDED = 145;
const TEAM_MEMBER_NOT_FOUND_IN_USER_DATABASE = 146;
const TEAM_CREATED_SUCCESSFULLY = 147;
const TEAM_UPDATED_SUCCESSFULLY = 148;
const TEAM_DELETED_SUCCESSFULLY = 149;

module.exports = {
    TEAM_NOT_FOUND,
    TEAM_FOUND_SUCCESSFULLY,
    TEAMNAME_IS_NOT_PROVIDED,
    TEAM_BASICDETAILS_IS_NOT_PROVIDED,
    TEAM_MEMBERS_IS_NOT_PROVIDED,
    TEAM_LEADER_IS_NOT_PROVIDED,
    TEAM_MEMBER_NOT_FOUND_IN_USER_DATABASE,
    TEAM_CREATED_SUCCESSFULLY,
    TEAM_UPDATED_SUCCESSFULLY,
    TEAM_DELETED_SUCCESSFULLY,
}

// supervisorController Status Codes
const SUPERVISOR_NOT_FOUND = 160;
const SUPERVISOR_FOUND_SUCCESSFULLY = 161;
const SUPERVISOR_NAME_IS_NOT_PROVIDED = 162;
const SUPERVISOR_PRIMARYEMAIL_IS_NOT_PROVIDED = 163;
const SUPERVISOR_ADDED_SUCCESSFULLY = 164;
const SUPERVISOR_UPDATED_SUCCESSFULLY = 165;
const SUPERVISOR_REMOVED_SUCCESSFULLY = 166;
const FETCH_ALL_SUPERVISOR_IS_SUCCESSFUL = 167;

module.exports = {
    SUPERVISOR_NOT_FOUND,
    SUPERVISOR_FOUND_SUCCESSFULLY,
    SUPERVISOR_NAME_IS_NOT_PROVIDED,
    SUPERVISOR_PRIMARYEMAIL_IS_NOT_PROVIDED,
    SUPERVISOR_ADDED_SUCCESSFULLY,
    SUPERVISOR_UPDATED_SUCCESSFULLY,
    SUPERVISOR_REMOVED_SUCCESSFULLY,
    FETCH_ALL_SUPERVISOR_IS_SUCCESSFUL,
}

// authMiddleware Status Codes
const TOKEN_NOT_GENERATED = 200;
const TOKEN_EXPIRES = 201;

module.exports = {
    TOKEN_NOT_GENERATED,
    TOKEN_EXPIRES,
}

// mongoDB server error Status Codes
const MONGODB_SERVER_ERROR_FIND = 300;
const MONGODB_SERVER_ERROR_FINDBYID = 301;
const MONGODB_SERVER_ERROR_FINDBYIDANDDELETE = 302;
const MONGODB_SERVER_ERROR_FINDBYIDANDUPDATE = 303;
const MONGODB_SERVER_ERROR_FINDONE = 304;
const MONGODB_SERVER_ERROR_FINDONEANDDELETE = 305;
const MONGODB_SERVER_ERROR_FINDONEANDREPLACE = 306;
const MONGODB_SERVER_ERROR_FINDONEANDUPDATE = 307;
const MONGODB_SERVER_ERROR_SAVE = 308;

module.exports = {
    MONGODB_SERVER_ERROR_FIND,
    MONGODB_SERVER_ERROR_FINDBYID,
    MONGODB_SERVER_ERROR_FINDBYIDANDDELETE,
    MONGODB_SERVER_ERROR_FINDBYIDANDUPDATE,
    MONGODB_SERVER_ERROR_FINDONE,
    MONGODB_SERVER_ERROR_FINDONEANDDELETE,
    MONGODB_SERVER_ERROR_FINDONEANDREPLACE,
    MONGODB_SERVER_ERROR_FINDONEANDUPDATE,
    MONGODB_SERVER_ERROR_SAVE,
}

// Internal server error Status Codes
const INTERNAL_SERVER_ERROR_BCRYPT_COMPARE = 400;

module.exports = {
    INTERNAL_SERVER_ERROR_BCRYPT_COMPARE,
}