$(document).ready(function () {
    $(".ui.user.forget.button").on("click", function () {
        var username = $("input.user.forget.username").val();
        var email = $("input.user.forget.email").val();

        if (username && email) {
            var formData = new FormData();
            formData.append("username", username);
            formData.append("email", email);

            $.ajax({
                url: "/forget",
                type: "post",
                data: formData,
                processData: false,
                contentType: false,
                success: function (status) {
                    if ("success" == status) {
                        new Dialog("重置密码", "重置密码成功，密码已经发送到邮箱：" + email, function () {
                            window.location = "login";
                        }).message();
                    } else {
                        new Dialog("重置密码", "重置密码失败，原因：" + status).error();
                    }
                },
                error: function () {
                    new Dialog("重置密码", "重置密码失败", function () {
                    }).error();
                }
            });
        } else {
            new Dialog("信息不正确", "必须填写登录名和邮箱").message()
        }
    });
});
