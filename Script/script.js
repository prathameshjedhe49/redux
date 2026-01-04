$(document).ready(function() {
    $('.stat-card').hide().each(function(index) {
        $(this).delay(index * 150).fadeIn(500);
    });
    
  
    $('#toggleSidebar').click(function() {
        $('#sidebar').toggleClass('collapsed');
        $('#mainContent').toggleClass('expanded');
    });
    
   
    $('.sidebar .nav-link').hover(
        function() {
            $(this).stop().animate({ paddingLeft: '30px' }, 200);
        },
        function() {
            $(this).stop().animate({ paddingLeft: '20px' }, 200);
        }
    );
    
   
    $('.activity-item').click(function() {
        $(this).css('background-color', '#e7f3ff');
        setTimeout(() => {
            $(this).css('background-color', '');
        }, 500);
    });
    
  
    $('#refreshBtn').click(function() {
        const btn = $(this).find('i');
        btn.addClass('spinning');
        
     
        $('#totalUsers, #revenue, #orders, #growth').fadeOut(300, function() {
            $('#totalUsers').text((Math.floor(Math.random() * 2000) + 1000).toLocaleString());
            $('#revenue').text('$' + (Math.floor(Math.random() * 50000) + 40000).toLocaleString());
            $('#orders').text((Math.floor(Math.random() * 800) + 400).toLocaleString());
            $('#growth').text((Math.random() * 20 + 5).toFixed(1) + '%');
            $(this).fadeIn(300);
        });
        
        setTimeout(() => {
            btn.removeClass('spinning');
        }, 1000);
    });
    

    $('table tbody tr').hover(
        function() {
            $(this).css('background-color', '#f8f9fa');
        },
        function() {
            $(this).css('background-color', '');
        }
    );
});