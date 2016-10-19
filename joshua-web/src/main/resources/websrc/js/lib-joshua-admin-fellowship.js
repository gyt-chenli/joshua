/**
 * 后台用户管理操作
 */

<<<<<<< HEAD
$(document).ready(function () {

    var performFellowshipOperation = function (url,name,created_date,display_name,enable,owner,owner_username) {
        new Dialog("确定要添加团契吗？", function () {
            var formData = new FormData();
            formData.append("name",$(".ui.admin.fellowship.form input[fellowship_name='name']").val());
            formData.append("created_date",$(".ui.admin.fellowship.form input[fellowship_name='created_date']").val());
            formData.append("display_name",$(".ui.admin.fellowship.form input[fellowship_name='display_name']").val());
            formData.append("enable",$(".ui.admin.fellowship.form input[fellowship_name='enable']").val());
            formData.append("owner",$(".ui.admin.fellowship.form input[fellowship_name='owner']").val());
            formData.append("owner_username",$(".ui.admin.fellowship.form input[fellowship_name='owner_username']").val());
            formData.append("_csrf", $(".ui.admin.fellowship.form input[fellowship_name='_csrf']").val());
            $.ajax({
                url: "/api/fellowship/add",
                type: "post",
                data: formData,
                processData: false,
                contentType: false,
                success: function (status) {
                    if (status) {
                        new Dialog("消息", "添加团契成功", function () {
                            location.reload();
                        }).message();
                    } else {
                        new Dialog("消息", "添加团契失败").error();
                    }
                },
                error: function () {
                    new Dialog("消息", "添加团契失败").error();
                }
            });
        }).confirm();
    };

    $(".ui.admin.fellowship.add.modal").modal({
        closeable: false,
        onApprove: function () {
            addFellowship($(".ui.admin.fellowship.add.modal").modal("show"));
=======
var enableFellowship = function (name) {
    new Dialog("激活团契", "激活团契后团契和团契所属的文章会重新在网站显示，确认要激活吗？", function () {
        var formData = new FormData();
        formData.append("_csrf", $(".ui.admin.user.form input[name='_csrf']").val());
        formData.append("name", name);

        $.ajax({
            url: "/api/fellowship/enable",
            type: "post",
            data: formData,
            processData: false,
            contentType: false,
            success: function (status) {
                if ("success" == status) {
                    window.location.reload();
                } else {
                    new Dialog("激活团契", "激活失败，原因：" + status, function () {
                    }).error();
                }
            },
            error: function () {
                new Dialog("激活团契", "激活失败", function () {
                }).error();
            }
        });
    }).confirm();
};

var disableFellowship = function (name) {
    new Dialog("禁用团契", "禁用团契后团契和团契所属的文章将不会在网站显示，确认要禁用吗？", function () {
        var formData = new FormData();
        formData.append("_csrf", $(".ui.admin.user.form input[name='_csrf']").val());
        formData.append("name", name);

        $.ajax({
            url: "/api/fellowship/disable",
            type: "post",
            data: formData,
            processData: false,
            contentType: false,
            success: function (status) {
                if ("success" == status) {
                    window.location.reload();
                } else {
                    new Dialog("禁用团契", "禁用失败，原因：" + status, function () {
                    }).error();
                }
            },
            error: function () {
                new Dialog("禁用团契", "禁用失败", function () {
                }).error();
            }
        });
    }).confirm();
};

var transferFellowship = function (name, username) {
    var formData = new FormData();
    formData.append("_csrf", $(".ui.admin.user.form input[name='_csrf']").val());
    formData.append("name", name);
    formData.append("username", username);

    $.ajax({
        url: "/api/fellowship/transfer",
        type: "post",
        data: formData,
        processData: false,
        contentType: false,
        success: function (status) {
            if ("success" == status) {
                window.location.reload();
            } else {
                new Dialog("转移团契", "转移失败，原因：" + status, function () {
                }).error();
            }
        },
        error: function () {
            new Dialog("转移团契", "转移失败", function () {
            }).error();
        }
    });
};

var addAdminFellowship = function (name, username) {
    var formData = new FormData();
    formData.append("_csrf", $(".ui.admin.user.form input[name='_csrf']").val());
    formData.append("name", name);
    formData.append("username", username);

    $.ajax({
        url: "/api/fellowship/add",
        type: "post",
        data: formData,
        processData: false,
        contentType: false,
        success: function (status) {
            if ("success" == status) {
                window.location.reload();
            } else {
                new Dialog("添加管理员", "添加管理员失败，原因：" + status, function () {
                }).error();
            }
        },
        error: function () {
            new Dialog("添加管理员", "添加管理员失败", function () {
            }).error();
        }
    });
};

var removeAdminFellowship = function (name, username) {
    new Dialog("移除管理员", "确定要移除管理员" + username + "?", function () {
        var formData = new FormData();
        formData.append("_csrf", $(".ui.admin.user.form input[name='_csrf']").val());
        formData.append("name", name);
        formData.append("username", username);

        $.ajax({
            url: "/api/fellowship/remove",
            type: "post",
            data: formData,
            processData: false,
            contentType: false,
            success: function (status) {
                if ("success" == status) {
                    window.location.reload();
                } else {
                    new Dialog("移除管理员", "移除管理员失败，原因：" + status, function () {
                    }).error();
                }
            },
            error: function () {
                new Dialog("移除管理员", "移除管理员失败", function () {
                }).error();
            }
        });
    }).confirm();
};

$(document).ready(function () {
    $(".ui.admin.fellowship.enable.button").on("click", function () {
        enableFellowship($(this).data("name"));
    });

    $(".ui.admin.fellowship.disable.button").on("click", function () {
        disableFellowship($(this).data("name"));
    });

    $(".ui.admin.fellowship.remove.button").on("click", function () {
        removeAdminFellowship($("#fellowship-id").text().trim(), $(this).data("username"));
    });

    $(".ui.admin.fellowship.transfer.owner.button").on("click", function () {
        $("#owner-username").val("");
        $(".ui.admin.fellowship.transfer.modal").modal("show");
    });

    $(".ui.admin.fellowship.add.button").on("click", function () {
        $("#admin-username").val("");
        $(".ui.admin.fellowship.add.modal").modal("show");
    });

    $(".ui.admin.fellowship.transfer.modal").modal({
        closeable: false,
        onApprove: function () {
            var input = $("#owner-username");
            transferFellowship($("#fellowship-id").text().trim(), input.val());
>>>>>>> aa7811005ae1e352128f6873ade34817c0f00d15
        },
        onDeny: function () {
            return true;
        }
    });

<<<<<<< HEAD
    $(".ui.admin.fellowship.add.fellowship.disable.button").on("click", function () {
        performFellowshipOperation("disable", $(this).data("name"),$(this).data("created_date"),$(this).data("enable"),$(this).data("owner"),$(this).data("owner_username"));
    });

    $(".ui.admin.fellowship.add.fellowship.enable.button").on("click", function () {
        performUserOperation("enable", $(this).data("name"),$(this).data("created_date"),$(this).data("enable"),$(this).data("owner"),$(this).data("owner_username"));
    });
    $(".ui.admin.fellowship.add.fellowship.enable.button").on("click",function () {
        $(".ui.admin.fellowship.fellowship.primary.fluid.add.modal").modal("show");
    })
    $(".ui.admin.fellowship.change.owner.secondary.button").on("click",function () {
        $(".ui.admin.fellowship.change.owner.secondary.fluid.modal").modal("show");
    })

});
=======
    $(".ui.admin.fellowship.add.modal").modal({
        closeable: false,
        onApprove: function () {
            var input = $("#admin-username");
            addAdminFellowship($("#fellowship-id").text().trim(), input.val());
        },
        onDeny: function () {
            return true;
        }
    });
});
>>>>>>> aa7811005ae1e352128f6873ade34817c0f00d15
