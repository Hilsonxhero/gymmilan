<?php

namespace Database\Seeders;

use App\Models\Exercise;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ExerciseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $exercises = array(
            array("name" => "ماموت ست"),
            array("name" => "جاینت ست"),
            array("name" => "دامنه نیمه"),
            array("name" => "سوپر ست"),
            array("name" => "تری ست"),
            array("name" => "دراپ ست"),
            array("name" => "هرمی"),
            array("name" => "دامنه نیمه بالا"),
            array("name" => "دامنه نیمه پایین"),
            array("name" => "21"),
            array("name" => "FST7"),
            array("name" => "پاباز"),
            array("name" => "پاجمع"),
            array("name" => "دست باز"),
            array("name" => "دست جمع"),
            array("name" => "سنگین به سبک"),
            array("name" => "سبک به سنگین"),
            array("name" => "هرمی معکوس"),
            array("name" => "ایزومتریک"),
        );
        Exercise::query()->createMany($exercises);
    }
}
