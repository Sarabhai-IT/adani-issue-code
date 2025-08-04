function initializeDateTimePicker() {
    $('#occureddate').datetimepicker({
        value : new Date(),
        // maxDate: moment(),
        // defaultDate : moment(),
        // disabledTimeIntervals: [
        //     [moment(), moment().hour(24).minutes(60).seconds(60)]
        // ],
        format: 'd/m/Y H:i ',
        // timepicker: true,
        maxDate:0,
        step: 1,
        onShow : function(ct){
            const now = new Date();
            const selected  = new Date(ct);

            const today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
            const selectedDay = new Date(selected.getFullYear(),selected.getMonth(),selected.getDate());
            if(selectedDay.getTime() === today.getTime()){
                const maxHour = now.getHours();
                const maxMin = now.getMinutes();
                this.setOptions({
                    minTime : '00:00',
                    maxTime : `${maxHour}:${maxMin < 10 ? '0' : ''}${maxMin}`
                })
            }else if(selectedDay.getTime() > today.getTime()){
                this.setOptions({
                    minTime : false,
                    maxTime  : false
                })
            }else{
                this.setOptions({
                    minTime : '00:00',
                    maxTime : '23:59'
                })
            }
        }
    });

    $("#occureddate ").on("keydown ", function(e) {
        e.preventDefault();
    });
}
