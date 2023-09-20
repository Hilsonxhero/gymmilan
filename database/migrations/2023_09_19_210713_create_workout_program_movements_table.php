<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('workout_program_movements', function (Blueprint $table) {
            $table->id();
            $table->foreignId("workout_program_id")->constrained("workout_programs")->cascadeOnDelete();
            $table->foreignId("movement_id")->constrained("movements")->cascadeOnDelete();
            $table->string("type");
            $table->text("value");
            $table->smallInteger("repeat")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workout_program_movements');
    }
};