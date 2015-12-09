$(function() {
    $('header ul li a').click(function () {
        $('header ul li a').removeClass('current');
        $(this).addClass('current');
        $('section').addClass('hidden');
        $('#intro-' + this.id).removeClass('hidden');
        $('#project-' + this.id).removeClass('hidden');
        $('#intern-' + this.id).removeClass('hidden');
        $('#edu-' + this.id).removeClass('hidden');
    });
});
