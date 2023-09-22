<?php

function createDatetimeFromFormat($date, $format = 'Y/m/d H:i')
{
    return \Morilog\Jalali\CalendarUtils::createDatetimeFromFormat($format, $date);
}

function formatGregorian($date, $format = 'Y/m/d H:i')
{
    if ($date)  return \Morilog\Jalali\CalendarUtils::strftime($format, strtotime($date));
    return null;
}
