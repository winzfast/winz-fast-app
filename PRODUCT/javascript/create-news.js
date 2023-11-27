$('#submitButton').click(function () {
    let title = $('#titleInput').val();
    let price = $('#priceInput').val();
    let brand = $('#brandInput').val();
    let carModel = $('#carModelInput').val();
    let engine = $('#engineInput').val();
    let year = $('#yearInput').val();
    let fuel = $('#fuelInput').val();
    let origin = $('#originInput').val();
    let gear = $('#gearInput').val();
    let numberOfSeat = $('#numberOfSeatInput').val();
    let creatNews = {
        title: title,
        price: price,
        brand: brand,
        carModel: carModel,
        engine: engine,
        year: year,
        fuel: fuel,
        origin: origin,
        gear: gear,
        numberOfSeat: numberOfSeat
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(creatNews),
        url: "http://localhost:8080/api/news/create"
    }).done(function (response) {
        switch (response.status) {
            case 200:
                showSuccessMessage();
                break;
            case 400:
                showBadRequestMessage();
                break;
            case 500:
                showInternalErrorMessage();
                break;
            default:
                showErrorMessage();
        }
    });
});

function showSuccessMessage() {
    alert("Đăng bài thành công!")
}

function showBadRequestMessage() {
    alert("Dữ liệu không hợp lệ!")
}

function showInternalErrorMessage() {
    alert("Lỗi server, vui lòng thử lại!")
}

function showErrorMessage() {
    $('#errorModal').modal('show');
    $('#errorModal .modal-body').text("Đã xảy ra lỗi! Vui lòng thử lại.");
    $('#errorModal .modal-footer').html(
        '<button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>'
    );
}
