var reviewIdCounter = 1;

function Review() {

    this.getReviews();
    this.showHidePopUp();
    this.formToAdminka();
    this.showOrNotRev();

}

//одобренный отзыв в каталог
Review.prototype.addUserRev = function (whatToListen) {
    this.whatToListen = whatToListen;

    $('#review-show-' + whatToListen).change(function () {
        let acceptedTovId = $(this.parentNode).attr('tovonid');
        let contentRevFromAdmin = $(this.nextSibling).next().text();
        let fioFromAdmin = $(this.nextSibling).next().next().text();

        if ($('.review-show-checkbox' + whatToListen).is(":checked")) {
            console.log(this);

            let $odobrenOtzivDiv = $('<div />', {
                id: 'review-accepted-' + whatToListen,
                class: 'review-content'
            });
            let $pAdminComment = $('<p />', {
                text: 'Коммент: ' + contentRevFromAdmin
            });
            let $pAdminFio = $('<p />', {
                text: fioFromAdmin
            });
            $pAdminComment.appendTo($odobrenOtzivDiv);
            $pAdminFio.appendTo($odobrenOtzivDiv);
            let $whatTovInsRev = $('.review-' + acceptedTovId);
            $odobrenOtzivDiv.appendTo($whatTovInsRev);


        } else {
            $('#review-accepted-' + whatToListen).remove();
        }
    })
};

Review.prototype.showOrNotRev = function(whereto) {
};


Review.prototype.formToAdminka = function() {
    //вставка в админку отзыва

    $('#send-review').on('click', function (form) {
        let idTov = $('#wantedIdReview').attr('class');
        let fio = $('.fio').val();
        let comment = $('.comment-text').val();

        $('#review-form').css({
                display: 'none'
            }
        );
        let $revIdNew = idTov*2 + reviewIdCounter;
        console.log(fio, comment, $revIdNew);
        let $reviewAdminDiv = $('<div>',{
            class: 'review-user id-' + $revIdNew,
            tovOnId: idTov,
            commIdAdmin: $revIdNew
        });
        let $revAdminP = $('<p />', {
            text: 'ID Коммента ' + $revIdNew
        });
        let $input = $('<input />', {
            id: 'review-show-' + $revIdNew,
            class: 'review-show-checkbox' + $revIdNew,
            type: 'checkbox'
        });
        let $label = $('<label />', {
            for: 'review-show-' + $revIdNew,
            text: 'Одобрить отзыв '
        });
        let $pComment = $('<p />', {
            text: comment,
            id: 'comment-content-admin'
        });
        let $pFio = $('<p />', {
            html: 'ФИО ' + '<span id=\"fio-id-' + $revIdNew + '\">' + fio + '</span>'
        });

        $revAdminP.appendTo($reviewAdminDiv);
        $input.appendTo($reviewAdminDiv);
        $label.appendTo($reviewAdminDiv)
        $pComment.appendTo($reviewAdminDiv);
        $pFio.appendTo($reviewAdminDiv);
        console.log($reviewAdminDiv);

        $('.reviews-admin').append($reviewAdminDiv);
        reviewIdCounter++;
        $('#wantedIdReview').remove();

        console.log($revIdNew);
        Review.prototype.addUserRev.call(this, $revIdNew);



    });
};

Review.prototype.showHidePopUp = function () {
        $('#review-form').css({
                display: 'none'
            }
        );

    $('.add-review').on('click', function (event) {
        $('#review-form').css({
                display: 'block'
            }
        );
        console.log(event);
        let reviewIdGood = $(this).attr('class').match(/\d+/);
        let wantedIdReview = $('<p />', {
            id: 'wantedIdReview',
            class: reviewIdGood[0],
            text: 'ID Товара ' + reviewIdGood[0]
        });
        $('.review-form__head').append(wantedIdReview);
    });

    $('#close-review__form').on('click', function () {
        $('#review-form').css({
                display: 'none'
            }
        );
        $('#wantedIdReview').remove();
    });
};

Review.prototype.getReviews = function () {
    var appendId = '#'+this.id+'_reviews';

    // Способ 1
    // var self = this;

    $.get({
        url:'./reviews.json',
        dataType:'json',
        context:this, // Способ 2
        success:function (data) {
           // console.log(this); // Что здесь выведется?

            for (let i = 0; i < data.length; i++) {
                let reviewDiv = $('<div />', {
                    id: 'review-accepted-' + data[i]["id-review"],
                    class: 'review-content'
                });
                let reviewFioP = $('<p />', {
                   text: "ФИО: " + data[i].fio
                });
                let reviewCommentP = $('<p />', {
                    text: "Коммент: " + data[i].comment
                });

                reviewCommentP.appendTo(reviewDiv);
                reviewFioP.appendTo(reviewDiv);
                let reviewClassWhereIns = '.review-' + data[i]["data-id"];

                reviewDiv.appendTo(reviewClassWhereIns);


            }

            // Перерисовка корзины
            //this.refresh();
        },
            error:function (error) {
            console.error('Ошибка получения корзины',error.status,error.statusText);
        }
    });


};