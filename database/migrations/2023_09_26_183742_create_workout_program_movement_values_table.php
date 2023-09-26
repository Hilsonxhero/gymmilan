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
        Schema::create('workout_program_movement_values', function (Blueprint $table) {
            $table->id();
            $table->foreignId("program_movement_id")->constrained("workout_program_movements")->cascadeOnDelete();
            $table->foreignId("movement_id")->constrained("movements")->cascadeOnDelete();
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
        Schema::dropIfExists('workout_program_movement_values');
    }
};
